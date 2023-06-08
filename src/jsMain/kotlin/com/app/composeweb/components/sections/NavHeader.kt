    package com.app.composeweb.components.sections

import androidx.compose.runtime.*
import com.app.composeweb.BlackColor
import com.app.composeweb.WhiteColor
import com.app.composeweb.YellowColor
import com.varabyte.kobweb.compose.css.*
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.*
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.forms.ButtonStyle
import com.varabyte.kobweb.silk.components.layout.breakpoint.displayIf
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.*
import com.varabyte.kobweb.silk.components.style.breakpoint.Breakpoint
import com.varabyte.kobweb.silk.components.style.common.SmoothColorStyle
import com.varabyte.kobweb.silk.theme.breakpoint.rememberBreakpoint
import com.varabyte.kobweb.silk.theme.toSilkPalette
import org.jetbrains.compose.web.css.*
import org.jetbrains.compose.web.dom.Span
import org.jetbrains.compose.web.dom.Text

    val NavHeaderStyle by ComponentStyle.base(extraModifiers = { SmoothColorStyle.toModifier() }) {
    Modifier
        .fillMaxWidth()
        .height(50.px)
        .backgroundColor(color = BlackColor)
}

val NavItemStyle by ComponentStyle {
    // Intentionally invert the header colors from the rest of the page
    val linkColor = colorMode.toSilkPalette().background

    base { Modifier.margin(leftRight = 15.px) }

    link { Modifier.color(linkColor) }
    visited { Modifier.color(linkColor) }
}

val NavButtonVariant by NavItemStyle.addVariant {
    base { Modifier.padding(0.px).borderRadius(50.percent) }
}

    val TextButton by ButtonStyle.addVariant {
        link { Modifier.color(YellowColor) }
        visited { Modifier.color(YellowColor) }

        base {

            Modifier
                .fontWeight(FontWeight.Black)
                .textDecorationLine(TextDecorationLine.None)
                .background(CSSBackground(color = BlackColor,size = BackgroundSize.Companion.of(0.px)))
                .color(YellowColor)
                .padding(0.dppx)
                .borderRadius(0.px)
                .backdropFilter(Filter.None)

        }
    }
@Composable
private fun navLink(path: String, text: String) {
    val br = rememberBreakpoint()
    Link(path,text, variant = TextButton,
        modifier = Modifier.color(YellowColor)
            .fontWeight(FontWeight.Black)
            .textDecorationLine(TextDecorationLine.None)
            .background(CSSBackground(color = BlackColor,size = BackgroundSize.Companion.of(0.px)))
            .color(YellowColor)
            .thenIf(br > Breakpoint.SM,//on Larger
                Modifier.margin(left = 45.px, right = 14.px)
            )
            .thenIf(br <= Breakpoint.SM ,//on Mobile
                Modifier.position(Position.Relative)
            )
            .borderRadius(0.px)
            .backdropFilter(Filter.None)
    )
}

@Composable
fun navHeader() {
    val br = rememberBreakpoint()
    Row(
        Modifier
            .thenIf(br > Breakpoint.SM,//on Larger
                Modifier
            )
            .thenIf(br == Breakpoint.SM || br  == Breakpoint.ZERO ,//on Mobile
                Modifier
                    .minWidth(100.vw)
                    .display(DisplayStyle.Flex)
                    .justifyContent(org.jetbrains.compose.web.css.JustifyContent.Center)
            ).fillMaxSize()
            .fillMaxWidth()
            .height(50.px)
            .backgroundColor(color = BlackColor),
        verticalAlignment = Alignment.CenterVertically,
        horizontalArrangement = Arrangement.SpaceBetween
    ) {

        Span(attrs = Modifier.onClick {}
            .fontWeight(FontWeight.Black)
            .color(WhiteColor)
            .displayIf(Breakpoint.MD)
            .fontSize(FontSize.Larger)
            .margin(left = 60.px)
            .toAttrs()){
            Text("Dilshad")
        }

        Row(

            modifier = Modifier

                .thenIf(br > Breakpoint.SM,//on Larger
                    Modifier.paddingInline(start = 10.px,20.px)
                        .maxWidth(MaxWidth.MaxContext)
                )
                .thenIf(br <= Breakpoint.SM ,//on Mobile
                    Modifier
                        .fillMaxWidth()
                        .paddingInline(5.px)
                        .display(DisplayStyle.Flex)
                        .justifyContent(org.jetbrains.compose.web.css.JustifyContent.SpaceEvenly    )
                        .alignItems(org.jetbrains.compose.web.css.AlignItems.Stretch)
                )

                .align(Alignment.CenterVertically),
            horizontalArrangement = Arrangement.SpaceBetween

        ){
            navLink("/","Home")
            navLink( "#about","About")
            navLink( "#skill","Skills")
            navLink("#project","Projects")
            navLink("https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body=","Contact")
        }

    }


}

