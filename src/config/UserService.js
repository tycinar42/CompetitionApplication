import RestApis from "./RestApis";
const UserService = {
    doOnline: RestApis.userservice+'/user/doonline',
    doOffline: RestApis.userservice+'/user/dooffline',
    getAllOnlineList: RestApis.userservice+'/user/getallonlinelist',
};
export default UserService;