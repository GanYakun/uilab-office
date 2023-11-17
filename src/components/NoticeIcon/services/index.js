
import { get } from './request'

const ServerUrl = {
  odataUrl: `/gbms/control/odataAppSvc`,
  api: `/mdt/control`
};

//查询患者的住院信息详情
// export const hospitalRecords = (id) => {
//   return get(`${ServerUrl.odataUrl}/HospitalRecords('${id}')?$select=createdDate&$expand=Patient($select=patientName,medicalInsuranceCardNo;$expand=PostalAddress($select=phoneNumber)),DoctorTeam($select=departmentName),DoctorsAdviceInHospital`)
// }


export const queryUnreadAlarm = (url) => {
  return get(`${ServerUrl.odataUrl}${url}`)
}

