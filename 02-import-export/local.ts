
import { 더하기, 곱하기 } from "./arithmetic.ts";

/**
 * 총 비용 구하기
 * 
 * @param 수출건 
 * @param 수입건 
 * @param 세금 
 * @returns - 총 비용
 */
function 총비용(수출건: number, 수입건: number, 세금: number): number {
    return 곱하기(더하기(수출건, 수입건), 세금);
}

console.log(총비용(19, 31, 1.2));
console.log(총비용(45, 27, 1.15));