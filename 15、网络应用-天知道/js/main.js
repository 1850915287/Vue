// 回车输入城市
// 查询数据
// 展现数据
var app = new Vue({
	el: "#app",
	data: {
		city: "",
		weathers: []
	},
	methods: {
		getWeather: function() {
			// console.log(this.city)
			var that = this;
			axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
				.then(function(response) {
					// console.log(response);
					that.weathers=response.data.data.forecast;
				}).catch(function(error) {
					console.log(error);
				})
		}
	}
})
