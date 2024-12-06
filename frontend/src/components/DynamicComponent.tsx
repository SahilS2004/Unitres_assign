import React from 'react';

interface DynamicComponentProps {
  type: string;
  props: any;
  permissions: string[];
  userRole: string;
}

const DynamicComponent: React.FC<DynamicComponentProps> = ({ type, props, permissions, userRole }) => {
  if (!permissions.includes(userRole)) {
    return null;
  }

  switch (type) {
    case 'Table':
      return <Table {...props} />;
    case 'Chart':
      return <Chart {...props} />;
    case 'Form':
      return <Form {...props} />;
    default:
      return null;
  }
};

const Table: React.FC<any> = ({ data, columns }) => {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column: string) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row: any, index: number) => (
          <tr key={index}>
            {columns.map((column: string) => (
              <td key={column}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const Chart: React.FC<any> = ({ data, type }) => {
  return (
    <div>
      <h3>{type} Chart</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const Form: React.FC<any> = ({ fields, onSubmit }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field: any) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input type={field.type} id={field.name} name={field.name} />
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicComponent;

