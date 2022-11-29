import { HTTP_METHOD } from 'configPath/index';

import { reqHandle } from 'commonPath/ajax';

export default {
  addLoginUser: reqHandle('/auxdemo/datareq/userLogin', {
    method: HTTP_METHOD.POST,
  }),
};
