
export interface FeatureFlagAttributes {
    id?: number;
    organization_id: number;
    feature_key: string;
    is_enabled: boolean;
}