# SportContract FrontEnd challenge

We need you to build a `<VideoPlayer />` component using latest **React & TypeScript**.

That component should be able to accept these props:

```ts
interface Props {
  videos: {
    title: string;
    url: string;
  }[];
  events: {
    title: string;
    videoTime: number;
    videoUrl: string;
  }[];
}
```

It should render the video in fullscreen, with a sidepanel on the right to display a list of events. The UI should look something like this:

```
|-------------------------------------------------
| video title      [videos dropdown] | Event 1   |
|------------------------------------| Event 2   |
|                                    | Event 3   |
|                                    | Event 4   |
|                                    | ...       |
|                                    |           |
|                                    |           |
|           VIDEO PLAYER             |           |
|                                    |           |
|                                    |           |
|                                    |           |
|                                    |           |
|------------------------------------|           |
| [-5] [Play] [+5] [Progressbar] ... |           |
|-------------------------------------------------
```

- The list of events is filtered base on the selected video
- The list should be scrollable
- Automatically play the first event when video is ready
- Clicking to the event should seek the video to the correct time
- When the video playing and the time is approaching the time of any event, that event should be highlighted.

That's it. Feel free to use any of the libraries available out there to help you achieve the task.

**Notes:**

- You can use whatever videos available on the Internet to do the testing, if you can't find any, here are some links:
  http://static.videogular.com/assets/videos/big_buck_bunny_720p_h264.mov
  http://static.videogular.com/assets/videos/elephants-dream.mp4
  http://static.videogular.com/assets/videos/videogular.mp4

- We're looking for production-ready code
- Think about possible real-life scenarios, what you did handle, what you can't, please take notes and bring them up in the next meeting.
- Basic styles to make the layout is required, no need for anything fancy. But if you are interested, feel free to make it looks nice. We also value a developer who can make the UI looks beautiful.
- Ideally, you should spend no more than 6 hours to complete the task.

If you are not sure about how something should work, give it a think about how real user would use it and make the executive decision by yourself (Imagine you're the product owner). We'd like to work with someone that can make decisions on their own. Don't forget to share with us the decisions you've made.

It's preferable if you can fork this CodeSanbox and send us back the link to your completed task. However, if you don't like to use CodeSanbox and want to develop in your own editor, that's fine too. Just send us the final result in a zip file.

Please send the completed task to: **anh.trinh@sportcontract.net** & **michael.zoellner@sportcontract.net**

Good luck and have fun!
