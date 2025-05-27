import { PublicConfigClass } from '@/packages/index'
export default class Config extends PublicConfigClass {
  constructor(data: any) {
    super()
    this.chartConfig = data
  }
  public key = 'BarCommon'
  public chartConfig
  public option = {
    name: '头像',
    dataset: {
      name: '头像',
      photo: ''
    }
  }
}