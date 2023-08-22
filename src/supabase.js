import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://sovepnntaooewlwcvebg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNvdmVwbm50YW9vZXdsd2N2ZWJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2NDc1MDEsImV4cCI6MjAwODIyMzUwMX0.5VyTECDKf6rV0vCsW_MuqyyoHQ5dc12OqrCZ1rS_SMs';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
