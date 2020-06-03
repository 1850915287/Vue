// document.domain = "autumnfish.cn";
// 设置axios的基地址
// axios.defaults.baseURL = 'https://autumnfish.cn';
var app = new Vue({
	el: "#player",
	data: {
		// 搜索关键字
		query: "",
		// 歌曲数组
		musicList: [],
		// 音乐地址
		musicUrl: ""
	},
	methods: {
		// 搜索歌曲
		searchMusic: function() {
			var that = this
			axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
				function(response) {
					// console.log(response);
					that.musicList = response.data.result.songs;
				},
				function(Error) {

				}
			)
		},
		// 播放歌曲
		playMusic: function(musicId) {
			var that = this;
			console.log(musicId);
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
				function(response) {
					// console.log(response);
					 that.musicUrl = response.data.data[0].url;
				}
			)
		}
	}
});
