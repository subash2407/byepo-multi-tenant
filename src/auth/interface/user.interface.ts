
export interface UserAttributes {
    id?: number;
    organization_id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    is_active?: boolean;
}