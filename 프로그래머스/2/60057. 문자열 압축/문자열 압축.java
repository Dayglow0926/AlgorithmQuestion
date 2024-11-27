class Solution {
   public String stringCompression(String s, int length){
        String str = "";
        String strCompare = "";
        String word = "";
        int count = 1;
        int strLength = s.length();

        for(int i=0, j=length ; strLength>=j; i+=length,j+=length){
            word = s.substring(i,j);
            if(strCompare.equals(word)){
                count++;
            }else{
                if(count<=1){
                    str += strCompare;
                }else {
                    str += count+strCompare;
                    count = 1;
                }
                strCompare = word;
            }
        }

        if(count>1) {
            str += count+word;
        }else{
            str += word;
        }

        int namuge = strLength%length;
        if(namuge>0){
            str += s.substring(s.length()-namuge);
        }
        return str;
    }

    public int solution(String s){

        if (s.length() == 1) return 1;
        int answer = 1000;
        int strMaxLenght = s.length()/2;

        for(int i=1; strMaxLenght>=i; i++){
            int strSize = stringCompression(s, i).length();
            answer = answer>strSize? strSize : answer;
        }

        return answer;
    }
}