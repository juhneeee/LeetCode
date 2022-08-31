class Node {
    constructor(){
        this.children= {}
        this.end = false
    }
}
class Trie {
    constructor(){
        this.root = new Node()
    }
    insert(word){
        let curr = this.root
        for (let char of word){
            if (!curr.children[char]){
                curr.children[char]= new Node()
            }
            curr = curr.children[char]
        }
        curr.end = true
    }
    search(word){
        let curr = this.root
        for (let char of word){
            if (!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return curr.end 
    }
    startsWith(prefix){
        let curr = this.root
        for (let char of prefix){
            if (!curr.children[char]){
                return false
            }
            curr = curr.children[char]
        }
        return true
    }
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */