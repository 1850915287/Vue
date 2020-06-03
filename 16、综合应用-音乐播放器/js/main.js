// document.domain = "autumnfish.cn";
var app = new Vue({
	el: "#player",
	data: {
		query: "",
		musicList: []
	},
	methods: {
		searchMusic: function() {
			var that = this
			axios.get("https://autumnfish.cn/search?keywords=" + this.query).then(
				function(response) {
					console.log(response.data.result.songs[0].name);
					that.musicList=response.data.result.songs;
				},
				function(Error) {

				}
			)
		}
	}
});
