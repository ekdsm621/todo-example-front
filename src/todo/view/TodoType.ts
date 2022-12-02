//FIXME: View에 해당하나요? 관심사를 조금 더 고민해보시고 적절한 위치인지 재판단해보세요.
export type TodoType = {
    id: number;
    registerDate: string;
    expiredDate: string;
    title: string;
    completed: boolean;
}