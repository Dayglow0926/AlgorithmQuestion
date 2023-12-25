//최소 힙 구현
class MinHeap {
    constructor() {
        this.heap = []
    }
    
    //이진 트리 구조 구현
    getParentIdx(childIdx){
        return Math.floor((childIdx - 1 ) /2);
    }
    getLeftChildIdx(parentIdx){
        return (parentIdx * 2) + 1;
    }
    getRightChildIdx(parentIdx){
        return (parentIdx * 2) + 2;
    }
    
    //heap tree의 노드개수르 세어주는 함수
    size(){
        return this.heap.length;
    }
    
    //주 노드를 swap 하기위한 함수
    swap(Idx_1, Idx_2){
        [this.heap[Idx_1], this.heap[Idx_2]] = [this.heap[Idx_2], this.heap[Idx_1]];
        
        return this.heap;
    }
    
    // 새로운 노드를 heap tree의 마지막 노드에 push
    push(value){
        this.heap.push(value);
        this.bubbleUp();
        
        return this.heap;
    }
    
    //최상단 head node를 pop 해주는 함수
    pop(){
        if(this.size() == 1){
            return this.heap.pop();
        }else if(this.size() == 0){
            return null;
        }
        
        const value = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return value;
    }
    
    //최소 힙 상태를 유지하기 위한 함수
    //부모노드가 자식노드보다 클 경우 자리를 바꿉니다.
    //맨 마지막 노드에서 출발해서 최상단 노드까지 올라가면서 bubble up 합니다.
    bubbleUp(){
        let child_Idx = this.size() - 1;
        let parent_Idx = this.getParentIdx(child_Idx);
        
        while (this.heap[child_Idx] < this.heap[parent_Idx]){
            this.swap(child_Idx, parent_Idx);
            child_Idx = parent_Idx;
            parent_Idx = this.getParentIdx(child_Idx);
        }
    }
    
    //최상단 노드에서 마지막노드까지 내려가면서 bubble down 한다.
    bubbleDown(){
        let parent_Idx = 0;
        let left_Idx = this.getLeftChildIdx(parent_Idx);
        let right_Idx = this.getRightChildIdx(parent_Idx);
        
        while((left_Idx <= this.size() - 1 && this.heap[left_Idx] < this.heap[parent_Idx]) || (right_Idx <= this.size() - 1 && this.heap[right_Idx] < this.heap[parent_Idx])){
            
            if(this.heap[right_Idx] < this.heap[left_Idx] && right_Idx <= this.size() - 1){
                //오른쪽과 부모노드를 swap 한다.
                this.swap(right_Idx, parent_Idx);
                parent_Idx = right_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            } else {
                //왼쪽과 부모노드를 swap 한다.
                this.swap(left_Idx, parent_Idx);
                parent_Idx = left_Idx;
                right_Idx = this.getRightChildIdx(parent_Idx);
                left_Idx = this.getLeftChildIdx(parent_Idx);
            }
        }
        
    }
}

function solution(scoville, K) {
    let answer = 0;

    //우선순위큐(heap) 생성
    const heap = new MinHeap();

    //scoville에 있는 각각의 요소를 forEach를 이용하여 sorting 한다.
    scoville.forEach(value => heap.push(value));

    while(heap.heap[0] < K && heap.size() > 1) {
        //첫번째 pop의 값과 두번째 pop의 2배의 합을 newfood 변수에 저장
        const first_pop = heap.pop();
        const second_pop = heap.pop();
        const newfood = first_pop + (second_pop * 2);

        //newfood를 다시 heap 트리에 삽입
        heap.push(newfood);
        //1번 루프를 돌 때마다 answer에 1 추가
        answer++;
    }

    if(heap.heap[0] >= K) {
        return answer;
    } else {
        return -1;
    }
}