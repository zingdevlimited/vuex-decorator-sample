import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';

@Module({ name: 'TestModule' })
export default class TestModule extends VuexModule {
  private myData: string = 'data';

  @Action
  public async loadDataFromConfig() {
    // long running action to fetch some data
    await new Promise((r) => setTimeout(r, 2000));

    // call mutation to modify state
    this.context.commit('setMyData', 'Data From Config');
  }

  @Mutation
  public setMyData(data: string) {
    this.myData = data;
  }

  public get MyData() {
    return this.myData;
  }
}
