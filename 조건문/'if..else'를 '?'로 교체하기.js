let message;

message = login==='직원'?
          '안녕하세요?'
          :login==='회원'?
          '환영합니다'
          :login===''?
          '로그인이 필요합니다.'
          :'';