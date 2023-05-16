export interface PushFormValues {
  token: string;
  topic: string;
  notification: {
    title: string;
    body: string;
  };
}
