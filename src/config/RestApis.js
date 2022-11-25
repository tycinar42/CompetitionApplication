const portAuth= '9090';
const portMain= '9091';
const portUser= '9092';
const version= '/api/v1';
const RestApis = {
    authservice: 'http://34.136.204.127:'+portAuth+version,
    mainservice: 'http://34.170.13.251:'+portMain+version,
    userservice: 'http://34.171.135.159:'+portUser+version,
    
};
export default RestApis;

