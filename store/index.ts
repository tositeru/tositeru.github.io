import { RootState, Person } from "~/types";
import { MutationTree, ActionTree } from "vuex";

export const state = (): RootState => ({
  currentContents: 'top',
})

export const mutations: MutationTree<RootState> = {
  setContents(state: RootState, contentsName: string): void {
    state.currentContents = contentsName;
  }
}

export const actions: ActionTree<RootState, RootState> = {
}
