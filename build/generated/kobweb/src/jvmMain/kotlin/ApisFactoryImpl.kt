import com.varabyte.kobweb.api.Apis
import com.varabyte.kobweb.api.ApisFactory
import com.varabyte.kobweb.api.`data`.MutableData
import com.varabyte.kobweb.api.log.Logger

public class ApisFactoryImpl : ApisFactory {
    public override fun create(logger: Logger): Apis {
        val data = MutableData()
        val apis = Apis(data, logger)
        apis.register("/hello") { ctx -> com.app.composeweb.api.hello(ctx) }

        return apis
    }
}
