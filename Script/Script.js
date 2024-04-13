const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
  {
    'id': 'a1',
    'title': 'WE ARE THE WALKING DEAD',
    'name': '01.mp4',
    'duration': '0:17',
  },
  {
    'id': 'a2',
    'title': 'THE WALKING WORLD',
    'name': '02.mp4',
    'duration': '0:21',
  },
  {
    'id': 'a3',
    'title': 'IF YOU DONT FIGHT, YOU DIE',
    'name': '03.mp4',
    'duration': '0:34',
  },

  {
    'id': 'a4',
    'title': 'RICK PRIME',
    'name': '04.mp4',
    'duration': '1:20',
  },
  {
    'id': 'a5',
    'title': 'SEASONS COMPILATION',
    'name': '05.mp4',
    'duration': '0:28',
  },
  {
    'id': 'a6',
    'title': 'RICK GRIMES',
    'name': '06.mp4',
    'duration': '0:17',
  },
  {
    'id': 'a7',
    'title': 'DARYL DIXON',
    'name': '07.mp4',
    'duration': '0:27',
  },

  {
    'id': 'a8',
    'title': 'RICK AND DARYL',
    'name': '08.mp4',
    'duration': '0:22',
  },
  {
    'id': 'a9',
    'title': 'THE BEST',
    'name': '09.mp4',
    'duration': '0:14',
  },
  {
    'id': 'a10',
    'title': 'NEGAN',
    'name': '10.mp4',
    'duration': '0:12',
  },
  {
    'id': 'a11',
    'title': 'CAROL',
    'name': '11.mp4',
    'duration': '0:12',
  },
  {
    'id': 'a12',
    'title': 'MAGGIE RHEE',
    'name': '12.mp4',
    'duration': '0:13',
  },
  {
    'id': 'a13',
    'title': 'MICHONNE',
    'name': '13.mp4',
    'duration': '0:32',
  },
  {
    'id': 'a14',
    'title': 'DO YOU HAVE ANY IDEA WHO YOU ARE TALKING TO?',
    'name': '14.mp4',
    'duration': '1:02',
  },
  {
    'id': 'a15',
    'title': 'DARYL | RICK | NEGAN',
    'name': '15.mp4',
    'duration': '1:08',
  },
];

data.forEach((video, i) => {
  let video_element = `
  <div class="video" data-id="${video.id}">
  <img src="Images/play.svg" alt="">
  <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
  <h3 class="title">${video.title}</h3>
  <p class="time">${video.duration}</p>
  </div>
  `;
  video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'Images/pause.svg';

videos.forEach(selected_video => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove('active');
      all_videos.querySelector('img').src = 'Images/play.svg';
    }

    selected_video.classList.add('active');
    selected_video.querySelector('img').src = 'Images/pause.svg';

    let match_video = data.find(video => video.id == selected_video.dataset.id);
    main_video.src = 'videos/' + match_video.name;
    main_video_title.innerHTML = match_video.title;
  }
});
