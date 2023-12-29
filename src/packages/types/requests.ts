export interface RequestsConfig {
  baseURL?: string
  AuthorizationKey?: string
  errorCodes?: Array<string | number>
  codeKey?: string
  messageKey?: string
  successCode?: string | number
  errorHandler?: Function
}
