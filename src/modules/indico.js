import Vue from 'vue'
export default {

    getSentiment: (img) => {

        return new Promise((resolve, err) => {
            Vue.http.post(
                'https://apiv2.indico.io/fer',
                JSON.stringify({
                  'api_key': "b4585e0f9e78404b5cacc0f83a7ac953",
                  'data': img,
                  'detect': true
                })
              ).then(function(res, err) { 
                if(err)
                    { 
                        err(err);
                        return;  
                    }
                resolve(res);
              });
        })
    }
}
