const express = require('express');
const mysql = require("mysql");
const server = express();
const pool = mysql.createPool({'host':'127.0.0.1','user':'root','password':'root','database':'vue-uni'})

//设置跨域
server.use('*',function(req,res,next){
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  res.header('X-Powered-By', ' 3.2.1')
  res.header('Content-Type', 'application/json;charset=utf-8')
  next()
})
// 获取swiper图片接口
server.use('/swiper',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'swiper数据库链接失败'})
		} else{
			con.query(`select * from swiper`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'swiper获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的swiper图片接口
server.use('/getswiper',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'swiper数据库链接失败'})
		} else{
			con.query(`select * from swiper where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'swiper获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的swiper图片接口
server.use('/setswiper',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'swiper数据库链接失败'})
		} else{
			con.query(`UPDATE swiper SET imgUrl=${imgUrl} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'swiper获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的swiper图片接口
server.use('/addswiper',(req,res) => {
	const img =  req.query.imgUrl;
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'swiper数据库链接失败'})
		} else{
			con.query('insert into `swiper` (`imgUrl`) values ("'+imgUrl+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'swiper获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的swiper图片接口
server.use('/shanchuswiper',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'swiper数据库链接失败'})
		} else{
			con.query('delete from `swiper` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'swiper获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})

// 获取icon小图标接口
server.use('/icon',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'icon小图标数据库链接失败'})
		} else{
			con.query(`select * from icon`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'icon小图标获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的icon小图标接口
server.use('/addicon',(req,res) => {
	const img =  req.query.imgUrl;
	const title =  req.query.title;
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'icon数据库链接失败'})
		} else{
			con.query('insert into `icon` (`imgUrl`,`title`) values ("'+imgUrl+'","'+title+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'icon获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的icon图片接口
server.use('/geticon',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'icon数据库链接失败'})
		} else{
			con.query(`select * from icon where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'icon获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的icon图片接口
server.use('/seticon',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const title =  "'"+req.query.title+"'";
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'icon数据库链接失败'})
		} else{
			con.query(`UPDATE icon SET imgUrl=${imgUrl},title=${title} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'icon获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的icon图片接口
server.use('/shanchuicon',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'icon数据库链接失败'})
		} else{
			con.query('delete from `icon` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'icon获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})


// 获取精选商品接口
server.use('/jingxuan',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'获取精选数据库链接失败'})
		} else{
			con.query(`select * from jingxuan`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'获取精选获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的精选接口
server.use('/getjingxuan',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'jingxuan数据库链接失败'})
		} else{
			con.query(`select * from jingxuan where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'jingxuan获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的精选接口
server.use('/setjingxuan',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'jingxuan数据库链接失败'})
		} else{
			con.query(`UPDATE jingxuan SET imgUrl=${imgUrl} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'jingxuan获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的精选接口
server.use('/addjingxuan',(req,res) => {
	const img =  req.query.imgUrl;
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'jingxuan数据库链接失败'})
		} else{
			con.query('insert into `jingxuan` (`imgUrl`) values ("'+imgUrl+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'jingxuan获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的精选接口
server.use('/shanchujingxuan',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'jingxuan数据库链接失败'})
		} else{
			con.query('delete from `jingxuan` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'jingxuan获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})

// 获取热门商品接口
server.use('/shangpinleft',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'获取热门商品数据库链接失败'})
		} else{
			con.query(`select * from shangpinleft`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'获取热门商品获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的热门商品接口
server.use('/getshangpinleft',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinleft数据库链接失败'})
		} else{
			con.query(`select * from shangpinleft where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinleft获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的热门商品接口
server.use('/setshangpinleft',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const title = "'"+req.query.title+"'"
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinleft数据库链接失败'})
		} else{
			con.query(`UPDATE shangpinleft SET imgUrl=${imgUrl},title=${title} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinleft获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的热门商品接口
server.use('/addshangpinleft',(req,res) => {
	const img =  req.query.imgUrl;
	const title = req.query.title
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinleft数据库链接失败'})
		} else{
			con.query('insert into `shangpinleft` (`imgUrl`,`title`) values ("'+imgUrl+'","'+title+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinleft获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的热门商品接口
server.use('/shanchushangpinleft',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinleft数据库链接失败'})
		} else{
			con.query('delete from `shangpinleft` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinleft获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})

// 获取热门商品接口
server.use('/shangpinright',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'获取热门商品数据库链接失败'})
		} else{
			con.query(`select * from shangpinright`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'获取热门商品获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的热门商品接口
server.use('/getshangpinright',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinright数据库链接失败'})
		} else{
			con.query(`select * from shangpinright where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinright获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的热门商品接口
server.use('/setshangpinright',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const title = "'"+req.query.title+"'"
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinright数据库链接失败'})
		} else{
			con.query(`UPDATE shangpinright SET imgUrl=${imgUrl},title=${title} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinright获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的热门商品接口
server.use('/addshangpinright',(req,res) => {
	const img =  req.query.imgUrl;
	const title = req.query.title
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinright数据库链接失败'})
		} else{
			con.query('insert into `shangpinright` (`imgUrl`,`title`) values ("'+imgUrl+'","'+title+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinright获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的热门商品接口
server.use('/shanchushangpinright',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'shangpinright数据库链接失败'})
		} else{
			con.query('delete from `shangpinright` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'shangpinright获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})


// 获取热门商品接口
server.use('/list',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'获取热门商品数据库链接失败'})
		} else{
			con.query(`select * from list`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'获取热门商品获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 获取指定id的热门商品接口
server.use('/getlist',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'list数据库链接失败'})
		} else{
			con.query(`select * from list where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'list获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 修改指定id的热门商品接口
server.use('/setlist',(req,res) => {
	const img =  "'"+req.query.imgUrl+"'";
	const title = "'"+req.query.title+"'"
	const xianjia =  "'"+req.query.xianjia+"'";
	const yuanjia = "'"+req.query.yuanjia+"'"
	const fukuan =  "'"+req.query.fukuan+"'";
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'list数据库链接失败'})
		} else{
			con.query(`UPDATE list SET imgUrl=${imgUrl},title=${title},xianjia=${xianjia},yuanjia=${yuanjia},fukuan=${fukuan} where id=${req.query.id}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'list获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 添加指定id的热门商品接口
server.use('/addlist',(req,res) => {
	const img =  req.query.imgUrl;
	
	const yuanjia =  req.query.yuanjia;
	const xianjia =  req.query.xianjia;
	const fukuan =  req.query.fukuan;
	const title = req.query.title
	const imgUrl = img.replace(/@/g,'&')
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'list数据库链接失败'})
		} else{
			con.query('insert into `list` (`imgUrl`,`title`,`yuanjia`,`xianjia`,`fukuan`) values ("'+imgUrl+'","'+title+'","'+yuanjia+'","'+xianjia+'","'+fukuan+'")',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'list获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
// 删除指定id的热门商品接口
server.use('/shanchulist',(req,res) => {
	const id =parseInt(req.query.id)
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'list数据库链接失败'})
		} else{
			con.query('delete from `list` where id="'+id+'"',(err,data) => {
				if (err) {
					res.send({ok:0,msg:'list获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})



// login接口
server.use('/user',(req,res) => {
	pool.getConnection((err,con) => {
		if (err) {
			res.send({ok:0,msg:'user数据库链接失败'})
		} else{
			con.query(`select * from user where user=${req.query.user} and pass=${req.query.pass}`,(err,data) => {
				if (err) {
					res.send({ok:0,msg:'user获取数据失败'})
				} else{
					res.send({ok:1,msg:data})
					con.end()
				}
			})
		}
	})
})
server.listen(9999);
console.log("9999端口启动成功")