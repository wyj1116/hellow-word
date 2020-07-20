
import { UPLOAD_HOST } from "@api/config";
import { Editor } from "@/components";
import { introduceSet, introduceGet } from "@api"
import city from "@/common/js/city";
import { mapGetters } from "vuex";

export default {
  name: "IntroduceSet",
  components: {
    Editor
  },
  data() {
    return {
      UPLOAD_HOST,
      // form: this.$form.createForm(this),
      city,
      data: {},
      fileList: [],
      previewVisible: false,
      previewImage: null,
      content: '',
      serviceContext: ''
    };
  },
  computed: {
    ...mapGetters(["userInfo"])
  },
  created() {
    this.getConfig();
  },
  methods: {
    submit(){
      this.setConfig();
    },
    handleChange(info) {
      let fileList = [...info.fileList];
      fileList = fileList.map(file => {
        if (file.response) {
          file.url = file.response.result.fileName;
        }
        return file;
      });
      this.fileList = fileList;
    },
    handlePreview(file) {
      this.previewImage = file.url || file.thumbUrl;
      this.previewVisible = true;
    },
    // 表单查询
    // handleSubmit(e) {
    //   e.preventDefault();
    //   this.form.validateFields((err, values) => {
    //     if (!err) {
    //       console.log(err); 
    //       console.log(values);
    //     }
    //   });
    // },
    onChange(value) {
      console.log(value);
    },
    async getConfig() {
      const { result, httpCode, message } = await introduceGet({id: this.userInfo.staffId});
      if (httpCode === 200) {
        this.fileList = result.imageUrls.map((val,index)=>{
          return {
            uid: index,
            name: val,
            url: val
          }
        })
        this.$refs.serviceContext.content = result.content;
      } else {
        this.$message.error(message);
      }
    },
    async setConfig() {
      const form = {
        content: this.$refs.serviceContext.content,
        imageUrls: this.fileList.map(val=> val.url)
      };
      const { result, httpCode, message } = await introduceSet(form);
      if (httpCode === 200) {
        console.log(result);
        this.getConfig();
        this.$message.success(message);
      } else {
        this.$message.error(message);
      }
    },
  }
};