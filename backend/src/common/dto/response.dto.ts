export class MessageResDto {
  message: string;

  public static default(): MessageResDto {
    return { message: 'Success' };
  }
}
