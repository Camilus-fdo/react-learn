import config from '../../configs/app'
import axios from 'axios'
/**
 * Base API Class that can be use to connect the apis
 */
export default class BaseAPI {
    /**
     * base url
     * @type {string}
     * @private
     */
    _baseURL = ''

    /**
     * resource parameter
     * @type {string}
     * @private
     */
    _resource =''

    /**
     * Auth token
     * @type {string}
     * @private
     */
    _token = ''

    _headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }

    _config = {
      'headers': this._headers
    }

    constructor () {
      this._baseURL = config.apiUrl
      this._token = ''
      this._setToken()

    }

    _setToken() {
      this._token = localStorage.getItem('userToken')
      this._headers.Authorization = 'Bearer ' + this._token
    }

    _getPath (pathArr) {
      return pathArr.join('/')
    }

    _getPathQueryParams (pathArr) {
      return pathArr.join('&')
    }
    /**
   * POST request of the resource
   * @param payload - payload
   * @returns {Promise<AxiosResponse<T>>}
   */
    post (payload, pathArr) {
      const url = this._baseURL

      if (this._token) {
        return axios.post(url + this._getPath(pathArr), payload, this._config)
      } else {
        return axios.post(url + this._getPath(pathArr), payload)
      }
        
    }

    get (pathArr) {
      const url = this._baseURL
      if (this._token) {
        return axios.get(url + this._getPath(pathArr), this._config)
      } else {
        return axios.get(url + this._getPath(pathArr))
      }
    }

    delete (pathArr) {
      const url = this._baseURL
      return axios.delete(url + this._getPath(pathArr), this._config)
    }

    getWithId(id, pathArr) {
      const url = this._baseURL

      return axios.get(url + this._getPath(pathArr) + '?id=' + id)
    }

    getWithQueryParams(params, pathArr) {
      const url = this._baseURL

      return axios.get(url + this._getPath(pathArr) + params, this._config)
    }

    put(payload, pathArr) {
      const url = this._baseURL

      return axios.put(url + this._getPath(pathArr), payload, this._config)
    }
}