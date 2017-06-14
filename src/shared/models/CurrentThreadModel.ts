/**
 * Created by alexh on 12/06/2017.
 */
import {DEFAULT_CHANNEL} from "shared/constants/channels";

export class CurrentThreadModel {
  private static currentThread = DEFAULT_CHANNEL;
  private static olderPages = 0;
  public static lastMessageId = -1;


  public switchThread(thread: number) {
    CurrentThreadModel.currentThread = thread;
    CurrentThreadModel.olderPages = 0;
    CurrentThreadModel.lastMessageId = -1;
  }

  public getMessagesRoute(): string {
    return CurrentThreadModel.currentThread + "/messages" +
      ((CurrentThreadModel.olderPages === 0) ? "" : ("?page=" + CurrentThreadModel.olderPages));
  }

  public getId() {
    return CurrentThreadModel.currentThread;
  }


  public getOlderPages() {
    CurrentThreadModel.olderPages += 1;
  }

}
