import { Branch } from "./branch";
import { ForiegnBankAccountFactory, LocalBankAccountFactory } from "./factory";


new Branch(new LocalBankAccountFactory()).createAccount('elias.mohammadi','simple')
new Branch(new LocalBankAccountFactory()).createAccount('elias.mohammadi','investment')
new Branch(new ForiegnBankAccountFactory()).createAccount('elias.mohammadi','simple')
new Branch(new ForiegnBankAccountFactory()).createAccount('elias.mohammadi','investment')
