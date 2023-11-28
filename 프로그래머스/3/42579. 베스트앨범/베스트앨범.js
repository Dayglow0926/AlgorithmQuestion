function solution(genres, plays) {
    var answer = [];
    //인기노래 저장 최대수
    const bestSongMax = 2;
    //인기노래 객체
    const bestAlbum = {}
    
    // 장르와 노래를 Map 형식으로 정리
    genres.forEach((v, i) => {
        //bestAlbum에 장르가 없다면 초기화
        if(bestAlbum[v] === undefined) {
            const temp = {
                totalCount : 0,
                bestSong : []
            };
            
            bestAlbum[v] = temp;
        }
        //장르별 총 재생수
        bestAlbum[v].totalCount += plays[i];
        //노래 넣기
        bestAlbum[v].bestSong.push([i, plays[i]]);
    })

    //장르 순위 정하기
    //객체를 배열로 변환 후 totalCount 순으로 정렬
    const bestAlbumArray = Object.keys(bestAlbum).map(item => bestAlbum[item]);
    bestAlbumArray.sort((a,b) => b.totalCount - a.totalCount);
    
    //장르 내에서 많이 재생된 노래 순위 ( 2위 까지 )
    //bestSong 정렬
    bestAlbumArray.forEach((v) => {
        //장르 내에서 많이 재생된 노래 정렬
        v.bestSong.sort((a,b) => {
            //재생수가 같다면 고유번호가 낮은 노래를 먼저 수록
            if(a[1] === b[1]) return a[0] - b[0];
            return b[1] - a[1]
        })
        
        //수록한 노래수
        let count = 0;
        for(let song of v.bestSong){
            answer.push(song[0]);
            count++;
            if(bestSongMax<=count) break;
        }
    })
    
    return answer;
}