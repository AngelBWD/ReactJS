const postServie = {
    load: function(id){
         return fetch(`http://localhost:9999/api/origami`.concat(id ? '/'.concat(id):'')).then(res => res.json());
    }
};
 
export default postServie;