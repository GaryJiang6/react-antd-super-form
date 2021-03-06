# SuperPage

入口文件, 结合了 Form + Table|List 两个组件, 后台管理系统中常见搜索后展示表格或列表数据页面 进行实现, 对提高开发效率和实现自动化后台实现提供了组件支撑

![Table 案例](../examples/assets/Table.jpg)
![List 案例](../examples/assets/List.jpg)

### 使用
```jsx
import SuperForm from 'react-antd-super-form';
```
### 字段配置
```jsx
<SuperPage
type="table|list" //default table
search={
  {
    // Form 布局
    layout: 'horizontal'|'vertical'|'inline',
    // Form 样式
    formLayout: {
      labelCol: { span: 2 },
      wrapperCol: { span: 14 },
    },
    // Form 表单组件配置
    data:[]
  }
}
table={
  {
    // 扩展属性
    // 是否开始时进行 action 进行调用
    isInit: false,
    // 数据请求的处理函数
    action: func,
    // 接口数据 返回值 res 与 组件内字段完成 映射, list 为数据数组, total 为 数据量, status 为接口是否正常
    valueMap : (res) => {
        return {
          status: true,
          list: res.entry,
          total: res.totalRecordSize
        }
      },
    // antd Table 固有属性
    ...props
  }
}
/>
```

### 配置案例
```jsx
<SuperPage
  
  search={{
    layout: 'inline',
    data: [
      {
        label: '订单搜索',
        cType: Select,
        key: 'seartType',
        placeholder: '请选择',
        config: {
          initialValue: 1
        },
        options: [
          { label: '订单号', value: 1 },
          { label: '手机号', value: 2 },
          { label: '用户名', value: 3 },
        ],
        style: {
          width: 100
        }
      },
      {
        cType: Input,
        key: 'searKey',
        placeholder: '请输入',
        style: {
          width: 280
        }
      },
      {
        cType: 'br'
      },
      {
        label: '测试多选',
        cType: CheckBox.Group,
        key: 'f',
        options:[
          {label: 'A', value: 1},
          {label: 'B', value: 2},
          {label: 'C', value: 3},
        ],
        config: {
          initialValue: [1, 2]
        }
      },
      {
        cType: 'br'
      },
      {
        label: '测试单选',
        cType: Radio.Group,
        optionType:"button",
        key: '44',
        options: [
          {label: 'A', value: 1},
          {label: 'B', value: 2},
          {label: 'C', value: 3},
        ],
      },
      {
        cType: 'br'
      },
      {
        label: '测试单选',
        cType: Radio.Group,
        options: [
          {label: 'A', value: 1},
          {label: 'B', value: 2},
          {label: 'C', value: 3},
        ],
      },
      {
        cType: 'br'
      },
      {
        label: '测试Slider',
        cType: Slider,
        marks: {
          0: 'A',
          20: 'B',
          40: 'C',
          60: 'D',
          80: 'E',
          100: 'F',
        },
        style: {
          width: 300
        },
        config: {
          initialValue: 40
        }
      },
      {
        cType: 'br'
      },
      {
        label: '下单时间',
        cType: DatePicker.RangerPicker,
        key: 'time',
        placeholder: ['开始时间', '结束时间'],
        suffixIcon: <Icon type="clock-circle" />,
        showTime: true,
        style: {
          width: 400
        }
      },
      {
        cType: Button,
        key: 'test',
        size:"small",
        text: '今',
        onClick:(e, form) => {
          let date = new Date();
          form.setFieldsValue({
            time: [moment(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'YYYY/MM/DD'), moment(date, 'YYYY/MM/DD')]
          })
        }
      },
      {
        key: 'test',
        unbind: true,
        render: (form) => {
          return (
            <Button
              size="small"
              onClick={() => {
                let date = new Date();
                let date2 = new Date();
                date.setTime(date.getTime() - 30 * 24 * 60 * 60 * 1000);
                form.setFieldsValue({
                  time: [moment(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`, 'YYYY/MM/DD'), moment(`${date2.getFullYear()}-${date2.getMonth() + 1}-${date2.getDate()}`, 'YYYY/MM/DD')]
                })
              }}
            >近30天</Button>
          )
        }
      },
      {
        cType: 'br',
      },
      {
        label: '商品标题',
        cType: Input,
        key: 'productTitle',
        placeholder: '请输入',
        style: {
          width: 150
        }
      },
      {
        label: '订单类型',
        cType: Select,
        key: 'orderType',
        placeholder: '请选择',
        config: {
          initialValue: 1
        },
        options: {
          1: '订单号',
          2: '手机号',
          3: '用户名'
        },
        style: {
          width: 150
        }
      },
      {
        label: '订单来源',
        cType: Select,
        key: 'orderFrom',
        placeholder: '请选择',
        config: {
          initialValue: 1
        },
        options: {
          1: '订单号',
          2: '手机号',
          3: '用户名'
        },
        style: {
          width: 150
        }
      }, 
      {
        cType: 'br'
      },
    ],
  }
  }
  table={{
    type:"list|table",
    action:api.queryList,
    // 接口数据 返回值 res 与 组件内字段完成 映射, list 为数据数组, total 为 数据量, status 为接口是否正常
    valueMap : (res) => {
        return {
          status: true,
          list: res.entry,
          total: res.totalRecordSize
        }
      },
    renderItem: (item, index) => this.renderItem(item, index, false)
  }}

></SearchList>
```