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
		musicUrl: "",
		// 音乐封面
		picUrl: "",
		// 评论数组
		commentList: [],
		// 动画播放状态
		isPlay: false,
		// mv播放地址
		mvUrl:"",
		// mv显示状态
		isMv:false
	},
	methods: {
		// 搜索歌曲
		searchMusic: function() {
			var that = this
			axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
				function(response) {
					// console.log(response);
					console.log(response.data.result.songs);
					that.musicList = response.data.result.songs;
				},
				function(Error) {

				}
			)
		},
		// 播放歌曲
		playMusic: function(musicId) {
			var that = this;
			// console.log(musicId);
			// 获取音乐链接
			axios.get("https://autumnfish.cn/song/url?id=" + musicId).then(
				function(response) {
					// console.log(response);
					that.musicUrl = response.data.data[0].url;
				}
			)
			// 获取音乐详细
			axios.get("https://autumnfish.cn/song/detail?ids=" + musicId).then(
				function(response) {
					// console.log(response);
					// console.log(response.data.songs[0].al.picUrl);
					that.picUrl = response.data.songs[0].al.picUrl;
				}
			)
			// 获取歌曲评论
			axios.get("https://autumnfish.cn/comment/hot?type=0&id=" + musicId).then(
				function(response) {
					console.log(response);
					that.commentList = response.data.hotComments
				}
			)
		},
		// 播放歌曲
		play: function() {
			this.isPlay = true;
		},
		// 暂停歌曲
		pause: function() {
			this.isPlay = false;
		},
		// 播放MV
		playMv: function(mvid) {
			var that = this;
			axios.get('https://autumnfish.cn//mv/url?id=' + mvid).then(
				function(response){
					console.log(response.data.data.url);
					that.mvUrl=response.data.data.url;
					that.isMv=true;
				}
			)
		},
		// 隐藏遮罩层
		hide:function(){
			this.isMv=false;
		}
	}
});
