// 验证器包装
import vali from 'validator'

var validator = {
  conf () {},
  IsEmail: function (val) {
    if (vali.IsEmail(val)) { return true } else { return this.message + '格式不正确' }
  },
  isEmpty: function (val) {
    if (vali.isEmpty(val)) { return true } else { return this.message + '不能为空' }
  },
  isDataURI: function (val) {
    if (vali.isEmpty(val)) { return true } else { return this.message + '不是一个正确的URL' }
  },
  isByteLength: function (val) {
    let options = {min: 0, max: undefined}
    if (vali.isByteLength(val, options)) { return true } else { return this.message + '长度不能超过' + options.max }
  },
  IsEmailforObject: {
    type: function (val) {
      if (vali.IsEmail(val)) { return true } else { return this.message + '格式不正确' }
    }
  },
  isEmptyforObject: {
    type: function (val) {
      if (vali.isEmpty(val)) { return true } else { return this.message + '不能为空' }
    }
  }
}
export default validator
