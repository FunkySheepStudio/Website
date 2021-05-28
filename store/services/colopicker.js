import feathersClient, {
  makeServicePlugin,
  BaseModel
} from '../apis'

const serviceName = '/api/games/colorpicker'

// Extend the base class
class ColorPicker extends BaseModel {
  static modelName = serviceName
}

const servicePlugin = makeServicePlugin({
  Model: ColorPicker,
  service: feathersClient.service(serviceName),
  serviceName
})

// Optionally add service-level hooks, here:
feathersClient.service(serviceName).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
})

export default servicePlugin
