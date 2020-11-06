/* eslint-disable max-len */
const backendBase = `${process.env.REACT_APP_BACKEND_BASE}:${process.env.REACT_APP_BACKEND_PORT}`;

export default {
  nomenclaturesUri: {
    baseUri: `${backendBase}/api/nomenclatures?access_token=<%accessToken%>`,
    getAllWOrderUri: `${backendBase}/api/nomenclatures?access_token=<%accessToken%>&filter={"order":["genus","species","subsp","var","subvar","forma","authors","id"]}`,
    getAllBySearchTermUri: `${backendBase}/api/nomenclatures?access_token=<%accessToken%>&filter={"where":{
    "or":[
      {"genus":{"like":"%25<%term%>%25"}},
      {"species":{"like":"%25<%term%>%25"}},
      {"subsp":{"like":"%25<%term%>%25"}},
      {"var":{"like":"%25<%term%>%25"}},
      {"subvar":{"like":"%25<%term%>%25"}},
      {"forma":{"like":"%25<%term%>%25"}},
      {"authors":{"like":"%25<%term%>%25"}},
      {"genusH":{"like":"%25<%term%>%25"}},
      {"speciesH":{"like": "%25<%term%>%25"}},
      {"subspH":{"like": "%25<%term%>%25"}},
      {"varH":{"like": "%25<%term%>%25"}},
      {"subvarH":{"like": "%25<%term%>%25"}},
      {"formaH":{"like": "%25<%term%>%25"}},
      {"authorsH":{"like": "%25<%term%>%25"}}
    ]}}`,
    getByIdUri: `${backendBase}/api/nomenclatures/<%id%>?access_token=<%accessToken%>`,
    getByIdWFilterUri: `${backendBase}/api/nomenclatures/<%id%>?access_token=<%accessToken%>&filter={"include":["accepted","basionym","replaced","nomen-novum",{"genus-rel":["family","family-apg"]}]}`,
    getNomenclatoricSynonymsUri: `${backendBase}/api/nomenclatures/<%id%>/synonyms-nomenclatoric?access_token=<%accessToken%>&filter={"include":"synonyms-nomenclatoric-through"}`,
    getTaxonomicSynonymsUri: `${backendBase}/api/nomenclatures/<%id%>/synonyms-taxonomic?access_token=<%accessToken%>&filter={"include":"synonyms-nomenclatoric-through"}`,
    getInvalidSynonymsUri: `${backendBase}/api/nomenclatures/<%id%>/synonyms-invalid?access_token=<%accessToken%>`,
    getMisidentificationsUri: `${backendBase}/api/nomenclatures/<%id%>/synonyms-misidentification?access_token=<%accessToken%>`,
    getSynonymsOfParent: `${backendBase}/api/nomenclatures/<%id%>/parent-of-synonyms?access_token=<%accessToken%>`,
    getBasionymForUri: `${backendBase}/api/nomenclatures/<%id%>/basionym-for?access_token=<%accessToken%>`,
    getReplacedForUri: `${backendBase}/api/nomenclatures/<%id%>/replaced-for?access_token=<%accessToken%>`,
    getNomenNovumForUri: `${backendBase}/api/nomenclatures/<%id%>/nomen-novum-for?access_token=<%accessToken%>`,
    countUri: `${backendBase}/api/nomenclatures/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  nomenclatureOwnersUri: {
    getAllWFilterUri: `${backendBase}/api/nomenclature-owners?access_token=<%accessToken%>&filter={"offset":<%offset%>,"where":<%&where%>,"limit":<%limit%>,"include":"accepted","order":<%&order%>}`,
    countUri: `${backendBase}/api/nomenclature-owners/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  generaUri: {
    baseUri: `${backendBase}/api/genera?access_token=<%accessToken%>`,
    getAllWFilterUri: `${backendBase}/api/genera?access_token=<%accessToken%>&filter={"offset":<%offset%>,"where":<%&where%>,"limit":<%limit%>,"include":["family-apg","family"],"order":<%&order%>}`,
    getAllBySearchTermUri: `${backendBase}/api/genera?access_token=<%accessToken%>&filter={"where":{"name":{"like":"%25<%term%>%25"}}}`,
    getAllWithFamiliesUri: `${backendBase}/api/genera?access_token=<%accessToken%>&filter={"include":["family-apg","family"]}`,
    getByIdWithFamilies: `${backendBase}/api/genera/<%id%>?access_token=<%accessToken%>&filter={"include":["family-apg","family"]}`,
    countUri: `${backendBase}/api/genera/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  familiesApgUri: {
    baseUri: `${backendBase}/api/family-apgs?access_token=<%accessToken%>`,
    getAllWFilterUri: `${backendBase}/api/family-apgs?access_token=<%accessToken%>&filter={"offset":<%offset%>,"where":<%&where%>,"limit":<%limit%>,"order":<%&order%>}`,
    getAllWOrderUri: `${backendBase}/api/family-apgs?access_token=<%accessToken%>&filter={"order":["name","id"]}`,
    getByIdUri: `${backendBase}/api/family-apgs/<%id%>?access_token=<%accessToken%>`,
    countUri: `${backendBase}/api/family-apgs/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  familiesUri: {
    baseUri: `${backendBase}/api/families?access_token=<%accessToken%>`,
    getAllWFilterUri: `${backendBase}/api/families?access_token=<%accessToken%>&filter={"offset":<%offset%>,"where":<%&where%>,"limit":<%limit%>,"order":<%&order%>}`,
    getAllWOrderUri: `${backendBase}/api/families?access_token=<%accessToken%>&filter={"order":["name","id"]}`,
    getByIdUri: `${backendBase}/api/families/<%id%>?access_token=<%accessToken%>`,
    countUri: `${backendBase}/api/families/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  synonymsUri: {
    baseUri: `${backendBase}/api/synonyms?access_token=<%accessToken%>`,
    synonymsByIdUri: `${backendBase}/api/synonyms/<%id%>?access_token=<%accessToken%>`,
  },
  usersUri: {
    loginUri: `${backendBase}/api/user-lbs/login`,
    logoutUri: `${backendBase}/api/user-lbs/logout?access_token=<%accessToken%>`,
    baseUri: `${backendBase}/api/user-lbs?access_token=<%accessToken%>`,
    getByIdWithRolesUri: `${backendBase}/api/user-lbs/<%id%>?access_token=<%accessToken%>&filter={"include":"roles"}`,
    getGeneraByUserId: `${backendBase}/api/user-lbs/<%id%>/genera?access_token=<%accessToken%>`,
    getAllWOrderUri: `${backendBase}/api/user-lbs?access_token=<%accessToken%>&filter={"include":"roles","order":["username"]}`,
    getAllWGeneraUri: `${backendBase}/api/user-lbs?access_token=<%accessToken%>&filter={"include":{"genera":["family","family-apg"]},"order":["username"]}`,
    updateByIdUri: `${backendBase}/api/user-lbs/update?access_token=<%accessToken%>&where={"id":"<%id%>"}`,
    countUri: `${backendBase}/api/user-lbs/count?access_token=<%accessToken%>&where=<%&whereString%>`,
  },
  userGeneraUri: {
    baseUri: `${backendBase}/api/users-generas?access_token=<%accessToken%>`,
    getAllByUserAndGenusUri: `${backendBase}/api/users-generas?filter={"where":{"and":[{"idUser":<%userId%>},{"idGenus":<%genusId%>}]}}&access_token=<%accessToken%>`,
    deleteUri: `${backendBase}/api/users-generas/<%id%>?access_token=<%accessToken%>`,
  },
  rolesUri: {
    getAllWOrderUri: `${backendBase}/api/roles?access_token=<%accessToken%>&filter={"order":["id"]}`,
  },
  roleMappingsUri: {
    baseUri: `${backendBase}/api/role-mappings?access_token=<%accessToken%>`,
    getByPrincipalIdUri: `${backendBase}/api/role-mappings?access_token=<%accessToken%>&filter={"where":{"principalId":"<%principalId%>"}}`,
  },
};
