<template>
	<div class="swiper">
		<!-- comoom -->
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
			<el-breadcrumb-item>热门商品左</el-breadcrumb-item>
		</el-breadcrumb>
		<!-- comoom -->

		<el-button type="primary" style="margin-bottom: 20px;" @click="add">添加热门商品</el-button>
		<el-dialog title="添加热门商品" :visible.sync="addVisible" width="70%">
			<el-form :model="addForm" :rules="addrules" ref="addruleForm" label-width="100px">
				<el-form-item label="图片文本" prop="title"><el-input v-model="addForm.title"></el-input></el-form-item>
				<el-form-item label="图片路径" prop="imgUrl"><el-input v-model="addForm.imgUrl"></el-input></el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer"><el-button type="primary" @click="addqueding">确 定</el-button></span>
		</el-dialog>

		<el-card>
			<el-table border stripe :data="list">
				<el-table-column label="id" width="100">
					<template slot-scope="scope">
						<el-tag>{{ scope.row.id }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="图片">
					<template slot-scope="scope">
						<img :src="scope.row.imgUrl" style="width: 200px; height: 70px;" />
					</template>
				</el-table-column>

			
				<el-table-column label="图片">
					<template slot-scope="scope">
						<el-tag type="danger">{{scope.row.title}}</el-tag>
					</template>
				</el-table-column>


				<el-table-column label="操作" width="200">
					<template slot-scope="scope">
						<el-button type="primary" icon="el-icon-edit" @click="set(scope.row.id)"></el-button>
						<el-button type="danger" icon="el-icon-delete" @click="remove(scope.row.id)"></el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>

		<el-dialog title="修改热门商品" :visible.sync="setVisible" width="70%">
			<el-form :model="setForm" :rules="setrules" ref="setruleForm" label-width="100px">
				<el-form-item label="图片id" prop="id"><el-input v-model="setForm.id" disabled></el-input></el-form-item>
				<el-form-item label="图片文本" prop="title"><el-input v-model="setForm.title"></el-input></el-form-item>
				<el-form-item label="图片路径" prop="imgUrl"><el-input v-model="setForm.imgUrl"></el-input></el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer"><el-button type="primary" @click="setqueding">确 定</el-button></span>
		</el-dialog>
	</div>
</template>

<script>
export default {
	created() {
		this.getlist();
	},
	data() {
		return {
			list: [],
			addVisible: false,
			addForm: {
				imgUrl: '',
				title:''
			},
			addrules: {
				imgUrl: [{ required: true, message: '请填写图片路', trigger: 'blur' }],
				title: [{ required: true, message: '请填写文本信息', trigger: 'blur' }]
			},
			setVisible: false,
			setForm: {},
			setrules: {
				id: [{ required: true, message: '请填写id', trigger: 'blur' }],
				title: [{ required: true, message: '请填写文本信息', trigger: 'blur' }],
				imgUrl: [{ required: true, message: '请填写图片路径', trigger: 'blur' }]
			}
		};
	},
	methods: {
		async getlist() {
			const { data: res } = await this.axios.get('http://127.0.0.1:9999/shangpinleft');
			this.list = res.msg;
		},
		add() {
			this.addVisible = true;
		},
		async set(id) {
			this.setVisible = true;
			const { data: res } = await this.axios.get(`http://127.0.0.1:9999/getshangpinleft?id=${id}`);
			this.setForm = res.msg[0];
		},
		addqueding() {
			this.$refs.addruleForm.validate(async value => {
				if (!value) return this.$message.error('请填写商品信息');
				const img = this.addForm.imgUrl;
				const title = this.addForm.title;
				const imgUrl = img.replace(/&/g, '@');
				const { data: res } = await this.axios.get(`http://127.0.0.1:9999/addshangpinleft?imgUrl=${imgUrl}&title=${title}`);
				if (res.ok != 1) {
					return this.$message.error('商品添加失败');
				}
				this.$message.success('商品添加成功');
				this.addVisible = false;
				this.addForm.imgUrl = '';
				this.addForm.title = '';
				this.getlist();
			});
		},
		setqueding() {
			this.$refs.setruleForm.validate(async value => {
				if (!value) return this.$message.error('商品信息不能为空');
				const id = this.setForm.id;
				const img = this.setForm.imgUrl;
				const title = this.setForm.title;
				const imgUrl = img.replace(/&/g, '@');
				const { data: res } = await this.axios.get(`http://127.0.0.1:9999/setshangpinleft?imgUrl=${imgUrl}&id=${id}&title=${title}`);
				if (res.ok != 1) {
					return this.$message.error('商品信息修改失败');
				}
				this.$message.success('商品信息修改成功');
				this.setVisible = false;
				this.getlist();
			});
		},
		async remove(id) {
			const ss = await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning'
			}).catch(err => err);
			if (ss == "cancel") {
				return this.$message.info("取消删除")	
			}
			const { data: res } = await this.axios.get(`http://127.0.0.1:9999/shanchushangpinleft?id=${id}`);
			if (res.ok != 1) {
				return this.$message.error('商品删除失败');
			}
			this.$message.success('商品删除成功');
			this.getlist();
		}
	}
};
</script>

<style scoped="scoped">
.el-breadcrumb {
	margin-bottom: 20px;
}
</style>
