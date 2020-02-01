/* eslint-disable */
const fetchFromLeanCloud = table => {
    const _table = table === "Users" ? "_User" : table;
    const query = new AV.Query(_table);

    return query.find(query.descending("createdAt"));
};

export default fetchFromLeanCloud;
