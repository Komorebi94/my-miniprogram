import { Project, upload } from 'miniprogram-ci'
import { wx } from '../package.json'

const { wxVersion: version, wxDesc: desc } = wx

if (!version) version = 'v1.0.0'
if (!desc) desc = new Date() + '上传'

const project = new Project({
    appid: 'wxd3b82f00c28826dc',
    type: 'miniProgram',
    projectPath: process.cwd() + '/dist',
    privateKeyPath: process.cwd() + '/config/private.wxd3b82f00c28826dc.key',
    ignores: ['node_modules/**/*'],
})
upload({
    project,
    version,
    desc,
    setting: {
        minify: true,
    },
})
    .then((res) => {
        console.log(res)
        console.log('上传成功')
    })
    .catch((error) => {
        if (error.errCode == -1) {
            console.log('上传成功')
            return
        }
        console.log(error)
        console.log('上传失败')
        process.exit(-1)
    })
