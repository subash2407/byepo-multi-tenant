
export interface UserAttributes {
    id?: number;
    organization_id: number;
    name: string;
    email: string;
    password: string;
    is_active?: boolean;
}