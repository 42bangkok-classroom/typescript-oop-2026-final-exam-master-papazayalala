import { PurchaseService } from "./service"
import { PurchaseController } from "./controller"
import { Purchase } from "./interface"
import { Purchaseitem} from "./interface"

@Module
imports: [],
  controllers: [PurchaseController],
  providers: [PurchaseService]

export class AppModule {}
