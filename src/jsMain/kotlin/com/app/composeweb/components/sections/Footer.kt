package com.app.composeweb.components.sections

import androidx.compose.runtime.*
import com.varabyte.kobweb.compose.css.AlignSelf
import com.varabyte.kobweb.compose.css.FontSize
import com.varabyte.kobweb.compose.foundation.layout.Arrangement
import com.varabyte.kobweb.compose.foundation.layout.Row
import com.varabyte.kobweb.compose.ui.Modifier
import com.varabyte.kobweb.compose.ui.modifiers.*
import com.varabyte.kobweb.silk.components.navigation.Link
import com.varabyte.kobweb.silk.components.style.*
import com.varabyte.kobweb.silk.theme.SilkTheme
import org.jetbrains.compose.web.css.*

val FooterStyle by ComponentStyle.base {
    Modifier
        .margin(top = 2.cssRem)
        .borderTop(1.px, LineStyle.Solid, SilkTheme.palettes[colorMode].border)
        .padding(topBottom = 1.cssRem, leftRight = 4.cssRem)
        .fontSize(FontSize.Smaller)
        .alignSelf(AlignSelf.Center)
}

@Composable
fun footer(modifier: Modifier = Modifier) {
    Row(FooterStyle.toModifier().then(modifier)) {
        Link("https://github.com/dilshad0101", "Github",
        modifier = Modifier.margin(leftRight = 5.px)
            )

        Link("https://mail.google.com/mail/?view=cm&to=dilshadmuhammed0101@gmail.com&su=&body=","Mail",
            modifier = Modifier.margin(leftRight = 5.px))
    }
}