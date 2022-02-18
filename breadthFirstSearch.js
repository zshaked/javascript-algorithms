//Breadth First Search For Tree
let tree = {
	"10": {
		value: "10",
		left: "4",
		right: "17",
	},
	"4": {
		value: "4",
		left: "1",
		right: "9",
	},
	"17": {
		value: "17",
		left: "12",
		right: "18",
	},
	"1": {
		value: "1",
		left: null,
		right: null,
	},
	"9": {
		value: "9",
		left: null,
		right: null,
	},
	"12": {
		value: "12",
		left: null,
		right: null,
	},
	"18": {
		value: "18",
		left: null,
		right: null,
	},
};

function breadthFirstSearch(tree,rootNode,searchValue){
    var queue = [];
    queue.push(rootNode);
    var value;

    while(queue.length !== 0){
      const node = queue.pop();
      // console.log("node: " + JSON.stringify(node));
      if(searchValue == node.value){
        console.log("found the node: " + JSON.stringify(node));
        return
      }
      
      if(node.left !== undefined){
        queue.push(tree[node.left]);
      }
      else if(node.right !== undefined){
        queue.push(tree[node.right]);
      }
      else{
        console.log("no value found")
         break;
      }
    }
    return node;
}

breadthFirstSearch(tree,tree["10"],"1");
