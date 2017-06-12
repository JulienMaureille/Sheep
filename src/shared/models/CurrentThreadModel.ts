/**
 * Created by alexh on 12/06/2017.
 */


export class CurrentThreadModel {
  private static currentThread = 1;


  public switchThread(thread: number) {
    CurrentThreadModel.currentThread = thread;
  }

  public getMessagesRoute() {
    return CurrentThreadModel.currentThread + "/messages/";
  }

}
