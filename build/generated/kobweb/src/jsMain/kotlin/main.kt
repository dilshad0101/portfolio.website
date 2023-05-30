import androidx.compose.runtime.CompositionLocalProvider
import com.varabyte.kobweb.core.AppGlobalsLocal
import com.varabyte.kobweb.navigation.RoutePrefix
import com.varabyte.kobweb.navigation.Router
import com.varabyte.kobweb.silk.defer.renderWithDeferred
import kotlin.Unit
import kotlinx.browser.document
import kotlinx.browser.window
import org.jetbrains.compose.web.renderComposable

public fun main(): Unit {
    RoutePrefix.set("")
    val router = Router()
    com.varabyte.kobweb.core.init.initKobweb(router) { ctx ->
        ctx.router.register("/") { com.app.composeweb.pages.HomePage() }

    }
    com.varabyte.kobweb.silk.init.initSilkHook = { ctx ->
        ctx.theme.registerComponentStyle(com.app.composeweb.components.sections.FooterStyle)
        ctx.theme.registerComponentStyle(com.app.composeweb.components.sections.NavHeaderStyle)
        ctx.theme.registerComponentStyle(com.app.composeweb.components.sections.NavItemStyle)
        ctx.theme.registerComponentVariants(com.app.composeweb.components.sections.NavButtonVariant)
        ctx.theme.registerComponentVariants(com.app.composeweb.components.sections.TextButton)
        com.app.composeweb.initSilk(ctx)
    }

    router.navigateTo(window.location.href.removePrefix(window.location.origin))

    // For SEO, we may bake the contents of a page in at build time. However, we will overwrite them
    // the first time we render this page with their composable, dynamic versions. Think of this as
    // poor man's hydration :)
    // See also: https://en.wikipedia.org/wiki/Hydration_(web_development)
    val root = document.getElementById("root")!!
    while (root.firstChild != null) {
        root.removeChild(root.firstChild!!)
    }

    renderComposable(rootElementId = "root") {
        CompositionLocalProvider(
            AppGlobalsLocal provides mapOf("title" to "Dilshad")
        ) { com.app.composeweb.MyApp {
              router.renderActivePage { renderWithDeferred { it() } }
        } }
    }
}
