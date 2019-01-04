<template>
    <el-form :model="addBlogForm" :rules="rules" ref="addBlogForm" label-width="100px" class="abform" size="medium" style="width:100%">
        <el-form-item label="标题" prop="title">
            <el-input v-model="addBlogForm.title"></el-input>
        </el-form-item>
        <el-form-item label="标签" prop="labels">
            <el-checkbox-group v-model="addBlogForm.labels">
                <el-checkbox label="美食/餐厅线上活动" name="labels"></el-checkbox>
            </el-checkbox-group>
        </el-form-item>
        <el-form-item label="分类" prop="classify">
            <el-select v-model="addBlogForm.classify" placeholder="请选择分类">
                <el-option label="" value=""></el-option>
                <el-option label="区域一" value="shanghai"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="内容" prop="content">
            <div id="editor">
                <mavonEditor style="height: 100%" v-model="addBlogForm.content"></mavonEditor>
            </div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('addBlogForm')">立即创建</el-button>
            <el-button @click="resetForm('addBlogForm')">重置</el-button>
        </el-form-item>    
    </el-form>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
    data(){
        return{
            addBlogForm:{
                title:'',
                labels:[],
                classify:'',
                content:''
            },
            rules:{title:{required: true, message:'请输入文章标题', trigger:'blur'},
            content:{required: true, message:'请输入文章内容', trigger:'blur'}
            }
        };
    },
    components: {
        mavonEditor
    },
    methods:{
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
}
</script>
<style>
#editor {
    margin: auto;
    width: 100%;
    height: 600px;
    margin-top: 1rem;
  }
</style>

