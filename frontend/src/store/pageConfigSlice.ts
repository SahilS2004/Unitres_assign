import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PageConfig {
  layout: {
    header: boolean;
    footer: boolean;
    leftNav: boolean;
  };
  components: {
    [key: string]: {
      type: string;
      props: any;
      permissions: string[];
    };
  };
}

interface PageConfigState {
  config: PageConfig | null;
}

const initialState: PageConfigState = {
  config: null,
};

const pageConfigSlice = createSlice({
  name: 'pageConfig',
  initialState,
  reducers: {
    setPageConfig: (state, action: PayloadAction<PageConfig>) => {
      state.config = action.payload;
    },
  },
});

export const { setPageConfig } = pageConfigSlice.actions;
export default pageConfigSlice.reducer;

