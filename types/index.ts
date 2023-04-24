export interface IServiceDefault {
  id?: number;
  beneficiary_id?: string;
  payer_id?: string;
  status?: string[];
  created_at?: Date|string;
  updated_at?: Date|string;
  transaction_type?: string[];
  amount?: string;
  currency?: string;
  comment?: number;
  payment_id?: boolean;
  property_id?: boolean;
}