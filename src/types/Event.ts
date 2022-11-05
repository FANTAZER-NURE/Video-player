/*
  I suggest than events have certain lentgth,
  that means - events should have defined time period
  [fromTime: toTime], so I added videoToTime property
*/

export interface Event {
  title: string;
  videoTime: number;
  videoToTime: number,
  videoUrl: string;
  index?: number,
}
